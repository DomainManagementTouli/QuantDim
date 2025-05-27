// Update the upload button click handler
uploadButton.addEventListener('click', async () => {
    if (!fileInput.files || fileInput.files.length === 0) {
        updateStatus('Please select files first', 'error');
        return;
    }

    try {
        updateStatus('Uploading files...', 'processing');
        
        const formData = new FormData();
        for (const file of fileInput.files) {
            formData.append('files', file);
        }

        // Point to your backend URL (will be an environment variable)
        const backendUrl = 'https://your-backend-service.vercel.app/upload';
        const response = await fetch(backendUrl, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (response.ok) {
            updateStatus('Files uploaded successfully!', 'success');
            fileInput.value = '';
        } else {
            updateStatus(`Error: ${result.error || 'Upload failed'}`, 'error');
        }
    } catch (error) {
        updateStatus(`Error: ${error.message}`, 'error');
    }
});
