# Anidel API (Backend)

This repository contains the API backend for Anidel, built with Bun/Node.

Author: Yogesh GR

## Overview

- Serves anime data to the `Anidel` frontend.
- Provides endpoints for homepage, detail pages, characters, episodes, and search.

## Requirements

- Bun (or Node.js)

## Setup

```powershell
cd Anidel-API
npm install
```

## Run (development)

```powershell
npm run dev
```

## Project Structure

- `src/` — application source
- `src/controllers/` — request handlers
- `src/extractor/` — data extraction logic
- `src/routes/` — express route definitions

## Notes

Adjust `src/config/dataUrl.js` if target source URLs change.
