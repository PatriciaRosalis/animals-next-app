import React, { useRef } from 'react';
import ReactS3Client from 'react-aws-s3-typescript';
import { AccessKeyID, SecretAccessKey } from '../keys';

const UploadImage = () => {
    const fileInput = useRef<HTMLSelectElement>(null);

    const handleClick = (event) => {
        // console.log(fileInput.current.files[0]);
        event.preventDefault();
        let file = fileInput.current.files[0];
        let newFileName = fileInput.current.files[0].name;

        const config = {
            bucketName: 'app-animal',
            region: 'eu-west-2',
            accessKeyId: AccessKeyID,
            secretAccessKey: SecretAccessKey,
        };

        const S3Client = new ReactS3Client(config);

        S3Client.uploadFile(file, newFileName).then((data) => {
            console.log(data);
            if (data.status === 204) {
                console.log('success');
            } else {
                console.log('fail');
            }
        });
    };

    return (
        <div>
            <input type='file' ref={fileInput} />
            <button
                style={{
                    background: '#F4C004',
                    height: '30px',
                    width: '120px',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    marginTop: '40px',
                    marginBottom: '30px',
                }}
                type='submit'
                onClick={handleClick}
            >
                Upload
            </button>
        </div>
    );
};

export default UploadImage;
