worker_processes 2
timeout 30

port = ENV['PORT'].to_i
listen port, tcp_nopush: false
