'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit({ children }) {
    const { pending } = useFormStatus();

    return <button disbled={pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}