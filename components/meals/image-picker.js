'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPickedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPickedImage(null);
        }
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && (
                    <Image
                        src={pickedImage}
                        alt="The image selected by the user"
                        fill
                    />
                )}
            </div>
            <input
                type="file"
                className={classes.input}
                id={name}
                name={name}
                accept="image/png, image/jpeg"
                ref={imageInput}
                onChange={handleImageChange}
                required
            />
            <button
                type="button"
                className={classes.button}
                onClick={handlePickClick}
            >
                Pick an Image
            </button>
        </div>
    </div>
}