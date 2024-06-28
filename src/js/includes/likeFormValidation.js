import JustValidate from 'just-validate';

const likeFormValidation = () => {
    const form = document.querySelector('#like-form');

    if (form) {
        const validator = new JustValidate(form, {
            errorLabelCssClass: ['error-label'],
        });

        const inputAll = form.querySelectorAll('[required]');

        inputAll.forEach(item => {
            validator.addField(item, [
                {
                    rule: 'required',
                    errorMessage: item.getAttribute('data-error-message'),
                },
            ]);
        });

        validator.onFail(() => {

        });

        validator.onSuccess(( event ) => {
            // event.currentTarget.submit();
        });
    }
}

export default likeFormValidation;