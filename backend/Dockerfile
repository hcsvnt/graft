FROM debian:bookworm-slim

WORKDIR /opt/gg

RUN mkdir -p /opt/gg /opt/module \
 && apt-get update \
 && apt-get install -y \
    ca-certificates \
    wget \
    python3-dev \
    nodejs \
    npm \
 && wget -O /tmp/gg.deb \
    https://github.com/grft-dev/graftcode-gateway/releases/latest/download/gg_linux_amd64.deb \
 && dpkg -i /tmp/gg.deb \
 && rm /tmp/gg.deb \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY index.js /opt/module/
COPY package.json /opt/module/

EXPOSE 80
EXPOSE 81

CMD ["gg", "--projectKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTljNTFhYS1kZDhhLTcyYTMtYTcyOC02OGZkZjY4ZDVmZmQiLCJnYXRld2F5X25hbWUiOiJsYW5reS13aWxkLW9saXZlIiwicGlkIjoiMDE5YzRmMTQtNDc2NC03Y2ZkLThjZWYtNzY4NTJkNWRjMDBkIiwicHJvamVjdF9uYW1lIjoibW9ja2VkLXllbGxvd3N0b25lIiwiaWF0IjoxNzcwODk2Njc4LCJuYmYiOjE3NzA4OTY2NzgsImV4cCI6MTc4NjUzNTA3OCwiaXNzIjoiZ3JhZnRjb2RlLWdhdGV3YXkiLCJhdWQiOiJncmFmdGNvZGUtYXBpIn0.u0n-WJKCnh659so81wF82CHMBcyvgRtRfXnanRgsf9k", "--modules", "/opt/module/index.js"]
