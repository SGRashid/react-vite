const getFomrData = (event: React.FormEvent<Element>, preventDefault = true) => {
    if (preventDefault) {
        event.preventDefault();
    }
    const formData = new FormData(event.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);
    return formProps;
};

export default getFomrData;