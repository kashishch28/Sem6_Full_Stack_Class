# UNIX — Structured Linux Notes

## Table of Contents
- [Overview](#overview)
- [Week 1 — UNIX Basics](#week-1--unix-basics)
- [Filesystem & Paths](#filesystem--paths)
- [Basic Commands](#basic-commands)
- [Advanced Commands](#advanced-commands)
- [Git from Terminal](#git-from-terminal)
- [Summary](#summary)

---

## Overview
This document contains **clean, beginner-friendly Linux/UNIX notes** written for direct use in a GitHub repository.  
All examples are runnable from the terminal.

---

## Week 1 — UNIX Basics

### Core Concepts
- **Kernel**: Core of the operating system (CPU, memory, hardware)
- **Shell**: Interface between user and kernel (executes commands)
- **CLI**: Command Line Interface (terminal-based)
- **GUI**: Graphical User Interface (mouse-based)

### Unix Philosophy
- Do one thing and do it well
- Programs should work together
- Text is the universal interface

---

## Filesystem & Paths

### Linux Filesystem Hierarchy
```
/
├── bin     # System binaries
├── home    # User directories
├── etc     # Configuration files
├── var     # Logs and variable data
├── usr     # User applications
└── tmp     # Temporary files
```

Everything in Linux is treated as a file.

---

### Paths

**Absolute Path**
```bash
/home/user/file.txt
```

**Relative Path**
```bash
../file.txt
```

---

### Hidden Files
- File names starting with `.`
- Examples: `.git`, `.bashrc`

```bash
ls -a
```

---

### Inode Concept
- Stores metadata (permissions, owner, size)
- File name is not stored in inode
- Each file has a unique inode number

```bash
ls -i
```

---

## Basic Commands
Copy and paste into terminal:

```bash
pwd             # show current directory
ls              # list files
cd ..           # move back one directory
mkdir demo      # create directory
rmdir demo      # remove empty directory
rm file.txt     # delete file
rm -r demo      # delete directory recursively
touch file.txt  # create empty file
cat file.txt    # display file content
less file.txt   # view file pagewise
man ls          # open manual for ls
```

---

## Advanced Commands

### grep — Search Text
```bash
grep "error" log.txt
```

### find — Search Files
```bash
find . -name "*.md"
```

### Permissions
```bash

## chmod Permission Table (Numeric)

### Permission Values
- 4 = read (r)
- 2 = write (w)
- 1 = execute (x)

### Common chmod Values

| chmod | Owner | Group | Others | Use case |
|------:|------|-------|--------|----------|
| 777 | rwx | rwx | rwx | Full access (not recommended) |
| 775 | rwx | rwx | r-x | Shared directories |
| 755 | rwx | r-x | r-x | Executable files / scripts |
| 744 | rwx | r-- | r-- | Owner full, others read |
| 700 | rwx | --- | --- | Private directory/file |
| 666 | rw- | rw- | rw- | Read/write file |
| 644 | rw- | r-- | r-- | Normal file (most common) |
| 600 | rw- | --- | --- | Private file |
| 444 | r-- | r-- | r-- | Read-only file |

### Example
```bash
chmod 755 script.sh
chmod 644 file.txt


```

### Pipes & Redirection
```bash
ls | grep txt
echo "hello" > file.txt
cat file.txt >> file2.txt
```

### Background Jobs
```bash
command &
jobs
```

---

## Git from Terminal
### Making a New Branch and Switching

Example workflow executed from terminal:

```bash
$ pwd
/c/Users/kashi

$ mkdir B
$ cd B

$ git init
Initialized empty Git repository

$ touch readme.md
$ code .

$ git add readme.md
$ git commit -m "Initial commit"

$ git checkout -b f_b
Switched to a new branch 'f_b'

$ git branch
* f_b
  master
```

Explanation:
- `git init` → creates repository
- `git checkout -b f_b` → creates and switches branch
- `git branch` → lists branches

---

## Summary
- UNIX fundamentals and philosophy
- Filesystem structure and paths
- Essential & advanced Linux commands
- Git branching using terminal


