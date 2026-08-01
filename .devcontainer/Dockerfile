# See here for image contents: https://github.com/devcontainers/images/tree/main/src/javascript-node

# [Choice] Node.js version (use -bookworm variants on local arm64/Apple Silicon): 24, 22, 24-bookworm, 22-bookworm, 24-bullseye, 22-bullseye
ARG VARIANT="24-bookworm"
FROM mcr.microsoft.com/devcontainers/javascript-node:1-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
