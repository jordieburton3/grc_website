import * as React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import '../../Styles/AppStyles.css';
import { EditableContent } from '../EditableContent/EditableContent';
import { BlogPreview } from './BlogPreview';

const testHeader = 'Dan Meteer exudes BDE after 2:17 marathon';
const testBody =
	"Sacramento, CA- Dan Meteer absolutely ripped a big one, and then he went on to run really fast in the marathon. HE almost decided to focus on the track but this dumbass was like lawl wanna know what's fun? Running really really far";
const testAuthor = 'Tom Kelly';

export const BlogPage: React.FunctionComponent = () => {
	// <EditableContent className={"blog-page__content"} onSave={(s: string) => console.log(s)} html={"<b>This is bold text</b> this is normal text <em>and this is italic text</em>"} canEdit={false}/>

	return (
		<div className={'blog-page__wrapper'}>
			<BlogPreview />
			<BlogPreview />
			<BlogPreview />
		</div>
	);
};
