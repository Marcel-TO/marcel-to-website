# Run project
run:
    bun run dev

# Build project
build:
    bun run build

# Reset dependencies
reset:
    rm -rf node_modules
    rm -rf bun.lock
    bun install

# Update dependencies
update:
    bun update --latest
