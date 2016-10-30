import React, {Component} from 'react';

class UploadInput extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            files: []
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        e.preventDefault();
        let files = this.refs.imageSelector.files;

        console.log(files);

        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const blob = new Blob([e.target.result]);
                const src = URL.createObjectURL(blob);
                console.log(src);
            };

            reader.readAsArrayBuffer(file);
        }

    }

    render() {
        return (
            <div className="row">
                <p><strong>Hoặc tải ảnh lên từ máy tính</strong></p>
                <input type="file"
                       multiple="multiple"
                       accept="image/*"
                       className="form-control"
                       ref="imageSelector"
                       onChange={this.onInputChange}
                />
                <hr/>
            </div>
        );
    }
}

export default UploadInput;