# gunicorn_config.py
bind = "0.0.0.0:8000"  # Bind to all interfaces on port 8000
workers = 4
timeout = 30  # Timeout in seconds