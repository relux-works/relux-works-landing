.PHONY: dev build preview clean install

install: ## Install dependencies
	npm ci

dev: ## Start dev server
	.scripts/dev.sh

build: ## Production build → dist/
	.scripts/build.sh

preview: ## Preview production build
	.scripts/preview.sh

clean: ## Remove dist/, .astro/, node_modules/
	.scripts/clean.sh

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
