QIX_ENGINE_VER := "12.225.0"
SENSE_CLIENT_VER := "5.43.0"

help:									## Show this help.
	@echo ''
	@echo 'Available commands:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ''
.PHONY: help

gen-readme:								## Generate README.md (using docker-verb)
	docker run --rm -v ${PWD}:/opt/verb stefanwalther/verb
.PHONY: gen-readme

build: 									## Build the extension (dev build)
	npm run build
.PHONY: build

release: 								## Build the extensions (release build)
	npm run release
.PHONY: release

up: build 								## Run the local development environment (build)
	export ENV=dev && \
	export DOCKER_COMPOSE=docker-compose.yml && \
	docker-compose down --timeout=0  && \
	docker-compose up -d --build
	@echo ""
	@echo "Open http://localhost:9076/sense/app/sense-media-box.qvf"
	@echo ""
.PHONY: run-build

down:
	export ENV=dev && \
	export DOCKER_COMPOSE=docker-compose.yml && \
	docker-compose down --timeout=0
.PHONY: down

up-release: release 					## Run the local development environment
	export ENV=release && \
	export DOCKER_COMPOSE=docker-compose.yml && \
	docker-compose --f=./docker-compose.yml down --timeout=0  && \
	docker-compose --f=./docker-compose.yml up -d --build
	@echo ""
	@echo "Open http://localhost:4848/sense/app/sense-media-box.qvf"
	# We might use: python -mwebbrowser http://example.com
.PHONY: run-release



#test-release:	## Test release build
#	npm run release && \
#	export ENV=release && \
#	npm run dc-rs && \
#	npm run test:e2e
#.PHONY: test-release
#
#test-dev:			## Test dev build
#	npm run release && \
#	export ENV=dev && \
#	npm run dc-rs && \
#	npm run test:e2e
#.PHONY: test-dev
