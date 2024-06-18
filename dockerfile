
FROM python:3.9-slim

LABEL version="1"
LABEL mantainer="Juan Camilo Lopera"

WORKDIR /usr/src/app_prueba

COPY app/app_python.py /usr/src/app_prueba

RUN apt-get update && apt-get install -y python3-tk && pip install tk && apt-get install -y xvfb

EXPOSE 8080

CMD ["xvfb-run","python3", "app_python.py"]
