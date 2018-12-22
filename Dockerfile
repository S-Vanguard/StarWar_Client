FROM hub.c.163.com/nce2/nodejs:0.12.2

# Create app directory
RUN mkdir -p /home/swapi
WORKDIR /home/swapi

# Bundle app source
COPY . /home/swapi
RUN npm install

EXPOSE 8888
# CMD [ "npm", "start" ]
CMD ["node", "bin/index.js", "8888", "8000"]