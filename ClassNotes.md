# 📘 JavaScript & Node.js Notes (README.md)

---

## 📦 npm start vs npm run

**npm start**

* Used to run the `start` script in `package.json`.
* If no `start` script is defined, npm runs `node server.js` by default.

**npm run**

* Used to run **any custom script** defined in the `scripts` section of `package.json`.
* Example: `npm run dev`, `npm run build`.

---

## 📄 package.json vs package-lock.json

**package.json**

* Contains project metadata and dependencies.
* Defines scripts, project name, version, author, license, etc.

**package-lock.json**

* Stores the **exact versions** of installed dependencies.
* Ensures the same dependency versions are installed on every machine.

---

## 🧾 What is Metadata?

**Metadata = data about data.**
It describes information about a project or file.

### In `package.json`, metadata includes:

* Project name
* Version
* Description
* Author
* License
* Dependencies

👉 npm uses metadata to manage and install packages correctly.

---

## 🤝 What is a Promise in JavaScript?

A **Promise** is an object that represents the result of an asynchronous operation that will be available in the future.

### Why we need Promises?

* To avoid callback hell
* To write clean and readable async code
* To handle success and error easily (`.then()` and `.catch()`)

---

## ⏱️ What is Async and Sync in JavaScript?

### 🔹 Synchronous (Sync)

* Code executes line by line.
* Each task waits for the previous one to finish.

### 🔹 Asynchronous (Async)

* Code does not block execution.
* Long tasks (API calls, timers, file reading) run in the background.

👉 Async improves performance and responsiveness.

---

## 🔁 What is a Callback Function?

A **callback function** is a function passed as an argument to another function and executed later.

### Common Uses:

* Event listeners
* setTimeout / setInterval
* API calls

👉 Callbacks define what should happen after an async task finishes.

---

## 🌍 Path, OS, Process, Global Objects (Node.js)

### **path**

* Used to work with file and directory paths.

### **os**

* Provides information about the operating system (CPU, memory, platform).

### **process**

* Provides information about the Node.js process (environment variables, arguments, PID).

### **global**

* Global variables and functions available everywhere in Node.js.

---

## 🔄 What is Event Loop in JavaScript?

The **Event Loop** manages asynchronous operations in JavaScript without blocking the main thread.

👉 It checks:

* Callback queue
* Microtask queue (Promises)
* Call stack

Node.js uses **libuv** for efficient non-blocking I/O.

---

# 🧠 JavaScript Core Concepts (Functions → Async)

---

## 1️⃣ What is a Function?

A **function** is a block of code that performs a specific task and can be reused.

**One-line:** A function is reusable code that runs when called.

---

## 2️⃣ What is a Callback?

A **callback** is a function passed as an argument to another function to be executed later.

### Examples:

* `setTimeout()`
* `addEventListener()`
* API calls

**One-line:** A callback is a function that is called after another function finishes.

---

## 3️⃣ Disadvantages of Callbacks

* Callback Hell (nested functions)
* Hard to read and debug
* Difficult to maintain in large programs

---

## 4️⃣ What is a Promise?

A **Promise** represents a value that will be available in the future.

### Promise States:

* Pending (working)
* Fulfilled (success)
* Rejected (failed)

**One-line:** A promise handles async operations and returns success or failure later.

---

## 5️⃣ Synchronous vs Asynchronous

### Synchronous (Sync)

* Executes tasks one by one
* Waits for each task to finish

### Asynchronous (Async)

* Does not block execution
* Runs tasks later (timers, API calls, events)

**One-line:** Sync runs sequentially, async runs without blocking.

---

## 6️⃣ async / await

* `async` makes a function return a promise
* `await` waits for the promise result

**One-line:** async/await is a cleaner and readable way to handle promises.

---

## 7️⃣ Evolution of Async JavaScript

```txt
Function → Callback → Promise → async/await
```

---

## 8️⃣ Advantages of Functions

* Code reuse
* Modular programming
* Easy maintenance

---

## 9️⃣ Disadvantages of Functions

* Extra memory and call overhead
* Complex for beginners
* Too many functions can confuse

---
