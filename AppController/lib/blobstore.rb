#!/usr/bin/ruby -w

$:.unshift File.join(File.dirname(__FILE__))
require 'helperfunctions'
require 'monit_interface'


# To support the Google App Engine Blobstore API, we have a custom server that
# handles Blobstore API requests, known as the Blobstore Server. This module
# abstracts away interactions with our Blobstore Server, providing methods to 
# start, stop, and monitor the Blobstore Server as needed.
module BlobServer

  SERVER_PORT = 6107


  NAME = 'as_blob_server'

  def self.start(db_local_ip, db_local_port)
    start_cmd = [
      "/usr/bin/python2 #{self.scriptname}",
      "-d #{db_local_ip}:#{db_local_port}",
      "-p #{self::SERVER_PORT}"
    ].join(' ')
    stop_cmd = "/usr/bin/python2 #{APPSCALE_HOME}/scripts/stop_service.py " +
      "#{self.scriptname} /usr/bin/python2"

    MonitInterface.start(:blobstore, start_cmd, stop_cmd, self::SERVER_PORT)
  end

  def self.stop()
     MonitInterface.stop(:blobstore)
  end

  def self.restart(my_ip, db_port)
    self.stop()
    self.start(my_ip, db_port)
  end

  def self.is_running?(my_ip)
    output = MonitInterface.is_running?(:blobstore)
    Djinn.log_debug("Checking if blobstore is already monitored: #{output}")
    return output
  end 

  def self.scriptname()
    return "#{APPSCALE_HOME}/AppDB/blobstore/blobstore_server.py"
  end
end
