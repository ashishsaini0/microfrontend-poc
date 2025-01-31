# Micro-Frontend Setup

This project demonstrates a micro-frontend architecture using **Module Federation** with Webpack, involving two micro-frontends: **Chat App** and **Email App**, integrated into a **Host App**. This setup allows you to dynamically load each micro-frontend as separate modules.

## Table of Contents
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Setup and Run](#setup-and-run)
  - [Start Chat App](#start-chat-app)
  - [Start Host App](#start-host-app)
- [Build Process](#build-process)
- [Troubleshooting](#troubleshooting)


## Project Structure

### `host-app`
The host application that integrates the micro-frontends (Chat and Email).

### `chat-app`
A micro-frontend for the chat feature that exposes the `ChatApp` module.

### `email-app`
A micro-frontend for the chat feature that exposes the `EmailApp` module.


## Dependencies
- **Webpack 5.x** for Module Federation
- **React** for UI components
- **React Router** for navigation
- **TypeScript** for type checking (TSX)

## Setup and Run

### 1. Install Dependencies
First, you need to install dependencies for both apps:

# Install dependencies for host app
cd host-app
npm install

# Install dependencies for chat app
cd ../chat-app
npm install

# Install dependencies for email app
cd ../email-app
npm install


# Start chat-app
cd chat-app
npm start


# Start email-app
cd email-app
npm start


# Start host-app
cd host-app
npm start