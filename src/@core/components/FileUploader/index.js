// ** React Imports
import { useState, useCallback, forwardRef, useEffect } from 'react'

// ** Reactstrap Imports
import { Button, Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud, Image } from 'react-feather'

import toast from 'react-hot-toast'
import { DocumentUploadConfig, ErrorToast } from '@utils'

// ** Styles
import '@styles/react/libs/file-uploader/file-uploader.scss'

const FileUploader = forwardRef(({ onFileChange, acceptedFormats, label, placeholder, error, multiple, disabled, maxFiles, value, ...props }, ref) => {
    // ** State
    const [files, setFiles] = useState(value || []);

    useEffect(() => { setFiles(value || []) }, [value]);

    const onDrop = useCallback((acceptedFiles) => {
        setFiles((oldFiles) => {
            const nonDuplicateFiles = acceptedFiles.filter(
                (newFile) => !oldFiles.find((oldFile) => oldFile.name === newFile.name)
            );

            if (nonDuplicateFiles.length < acceptedFiles.length)
                toastNotification("File name is duplicated. Please upload another file");

            const uploadedFiles = [...oldFiles, ...nonDuplicateFiles];

            // Use a setTimeout to ensure this runs asynchronously
            setTimeout(() => {
                onFileChange(uploadedFiles);
            }, 0);

            return uploadedFiles;
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        multiple: multiple ?? false,
        onDrop,
        maxFiles: maxFiles ?? DocumentUploadConfig.UploadDocumentFileLimit,
        accept: acceptedFormats
    });

    const renderFilePreview = file => {
        if (file?.type?.startsWith('image')) {
            return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
        } if (file?.format?.includes('image')) {
            return <Image size='28' />
        } else {
            return <FileText size='28' />
        }
    }

    const handleRemoveFile = file => {
        const uploadedFiles = files
        const filtered = uploadedFiles.filter(i => i.name !== file.name)
        if (!filtered.length) {
            setFiles("")
            onFileChange("");
        } else {
            setFiles([...filtered])
            onFileChange([...filtered]);
        }
    }

    const renderFileSize = size => {
        if (Math.round(size / 100) / 10 > 1000) {
            return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
        } else {
            return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
        }
    }

    // ** Toast Notification
    const toastNotification = (text) => {
        return toast(
            () => (<ErrorToast text={text} close={() => toast.dismiss()} />),
            {
                duration: 5000,
                position: "top-center",
                style: {
                    backgroundColor: "#fa9148",
                },
            }
        );
    };

    const fileList = !files.length ? null : files.map((file, index) => (
        <ListGroupItem key={`${file.name}-${index}`} className='bg-white d-flex align-items-center justify-content-between'>
            <div className='file-details d-flex align-items-center'>
                <div className='file-preview me-1'>{renderFilePreview(file)}</div>
                <div>
                    <p className='file-name mb-0'>{file.name}</p>
                    <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
                </div>
            </div>
            <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
                <X size={14} />
            </Button>
        </ListGroupItem>
    ))

    const handleRemoveAllFiles = () => {
        setFiles([])
        onFileChange('')
    }

    return (
        <Card className='mb-25 shadow-none' style={{ border: error ? "1px solid  #fa4858" : "1px solid  #d8d6de", pointerEvents: disabled ? 'none' : 'auto' }}>
            <CardBody>
                {maxFiles === 1 && files.length === 1
                    ? null
                    : <div {...getRootProps({ className: 'dropzone' })}
                    // style={{ pointerEvents: maxFiles === 1 && files.length === 1 ? 'none' : 'auto' }}
                    >
                        <input {...getInputProps({ ref })} />
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <div className="mb-50"><DownloadCloud size={30} /></div>
                            <h5>{label}</h5>
                            <small className="text-secondary">{placeholder}</small>
                        </div>
                    </div>}
                {files.length ? (
                    <>
                        <ListGroup className='my-2'>{fileList}</ListGroup>
                        {maxFiles === 1 && files.length === 1
                            ? null
                            : <div className='d-flex justify-content-end'>
                                <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
                                    Remove All
                                </Button>
                                {/* <Button color='primary'>Upload Files</Button> */}
                            </div>}
                    </>
                ) : null}
            </CardBody>
        </Card >
    );
});

export default FileUploader
