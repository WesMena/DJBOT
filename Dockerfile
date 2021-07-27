FROM ubuntu:latest 

WORKDIR /DJBot

RUN apt update 
RUN apt install -y curl 
RUN apt install -y software-properties-common
RUN add-apt-repository -y ppa:deadsnakes/ppa
RUN apt update
RUN apt install -y python3.8
RUN apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | -E bash -
RUN apt update 
RUN apt install -y nodejs
COPY package.json .
COPY commands . 
COPY commands/help.js commands/
COPY commands/pause.js commands/
COPY commands/play.js commands/
COPY commands/queue.js commands/
COPY commands/repeat.js commands/
COPY commands/resume.js commands/
COPY commands/skip.js commands/
COPY commands/stop.js commands/
COPY commands/volume.js commands/
COPY events .
COPY events/message.js events/
COPY events/ready.js events/
COPY utils .
COPY utils/loadCommands.js utils/
COPY utils/loadEvents.js utils/
COPY index.js . 
COPY settings.json .
RUN npm install
CMD ["npm","start"]


