FROM python:3.11-alpine

WORKDIR /hello_world

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . /hello_world

CMD ["python3", "hello_world.py"]
