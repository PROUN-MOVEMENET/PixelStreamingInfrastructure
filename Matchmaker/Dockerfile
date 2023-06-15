# Use the current Long Term Support (LTS) version of Node.js
FROM node:lts

# Copy the signalling server source code from the build context
COPY . /opt/Matchmaker

# Install the dependencies for the signalling server
WORKDIR /opt/Matchmaker
RUN npm install .

# Expose TCP port 9999 for connections from the Matchmaker
EXPOSE 80

# Set the signalling server as the container's entrypoint
ENTRYPOINT ["/usr/local/bin/node", "/opt/Matchmaker/matchmaker.js"]
