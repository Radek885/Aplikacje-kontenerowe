FROM python:3.12-slim AS builder

WORKDIR /app
COPY app.py .

RUN pip install --no-cache-dir requests pandas plotly

RUN python app.py

FROM nginx:alpine

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

COPY --from=builder /app/index.html /usr/share/nginx/html/index.html

USER nginx

EXPOSE 80