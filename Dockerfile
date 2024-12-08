FROM python:3.12-slim-bookworm

WORKDIR ./server

COPY requirements.txt .

RUN pip3 install --no-cache-dir --root-user-action=ignore -r requirements.txt

COPY ./server .

CMD ["python3", "web_server.py"]
