server {
  listen 80 default_server;
  server_name _;
  index index.html;
  location / {
    root /home/ubuntu/LearnWebApp/frontend-rework/dist/frontend-rework;
    try_files $uri /index.html;
  }
  location /api/ {
    proxy_pass http://127.0.0.1:3000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }