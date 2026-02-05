
echo "1️ Creating directory structure..."
mkdir -p practice/2026/january/week1

echo "2️ Moving into week1 and creating files..."
cd practice/2026/january/week1
touch file1.txt file2.txt

echo "3️ Listing files with inode numbers and permissions..."
ls -li

echo "4️Creating a hard link for file1.txt..."
ln file1.txt file1_link.txt

echo "5️ Verifying hard link behavior..."

echo "🔹 Deleting original file (file1.txt)..."
rm file1.txt

echo "🔹 Listing files after deleting original..."
ls

echo "🔹 Displaying contents of hard link (file1_link.txt)..."
cat file1_link.txt

echo "🔹 Listing inode numbers again to verify hard link..."
ls -li

echo "✅ Script execution completed successfully." 