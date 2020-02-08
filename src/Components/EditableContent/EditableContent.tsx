import * as React from 'react';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import "../../Styles/AppStyles.css";

interface IEditableContentProps {
    onSave: (newHtml: string) => void;
    html: string;
    // TODO: add user priviliges
    canEdit: boolean;
    className?: string;
}

interface IEditableContentState {
    isDisabled: boolean;
    html: string;
    committedHtml: string;
    isEditing: boolean;
}

export class EditableContent extends React.PureComponent<IEditableContentProps, IEditableContentState> {
    editableContentRef: any;
    
    constructor(props: any) {
        super(props);
        const { html } = props;
        this.state = {
            html: html, // TODO: this should come from props, not state
            committedHtml: html,
            isDisabled: true,
            isEditing: false
        };
        this.editableContentRef = React.createRef();
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidUpdate(prevProps: IEditableContentProps, prevState: IEditableContentState) {
        const { isDisabled } = this.state;
        if (prevState.isDisabled === true && isDisabled === false) {
            this.editableContentRef.current.focus();
        }
    }

    private _handleChange(e: any) {
        this.setState({ html: e.target.value });
    }

    private _handleCancel() {
        const { committedHtml } = this.state;
        this.setState({ isDisabled: true, isEditing: false, html: committedHtml });
    }

    private _onEditClicked() {
        this.setState({ isDisabled: false, isEditing: true });
        this.editableContentRef.current.focus();
    }

    private _onSaveClicked() {
        const { html } = this.state;
        const { onSave } = this.props;
        
        onSave(html);

        this.setState({ isDisabled: true, isEditing: false, committedHtml: html });
    }

    render() {
        const { canEdit, className } = this.props;
        const { isEditing, html, committedHtml } = this.state;
        return (
            <div className={`${className ? className : ""}`}>
                <ContentEditable innerRef={this.editableContentRef} className={`content-to-edit ${isEditing ? "editing" : ""}`} disabled={this.state.isDisabled} html={isEditing ? html : committedHtml} onChange={this._handleChange}/>
                {!isEditing && canEdit &&
                    <button className="editable-content__edit-button" onClick={() => this._onEditClicked()}>
                        Edit
                    </button>
                }
                {isEditing &&
                    <>
                        <button className="editable-content__save-button" onClick={() => this._onSaveClicked()}>
                            save
                        </button>
                        <button className="editable-content__cancel-button" onClick={() => this._handleCancel()}>
                            cancel
                        </button>
                    </>
                }
            </div>
        );
    }
}