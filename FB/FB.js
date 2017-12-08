

$(document).ready(function () {

    $('#fbForm').submit(function (e) {
        e.preventDefault();
        let nameField = $('input', this);
        let messageField = $('textarea', this);

        let name = nameField.val();
        let message = messageField.val();

        if (!name) {
            nameField.closest('div').addClass('has-error');
            let errorBlock = `
                <div class="help-block">
                    Name is Required
                </div>
            `;
            nameField.next('div').remove();
            nameField.after(errorBlock);
            nameField.focus();
        } else {
            nameField.closest('div').removeClass('has-error');
            nameField.next('div').remove();
        }

    });

});