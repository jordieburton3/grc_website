import * as React from 'react';

const testHeader = "Dan Meteer exudes BDE after 2:17 marathon";
const testBody = "Sacramento, CA- Dan Meteer absolutely ripped a big one, and then he went on to run really fast in the marathon. HE almost decided to focus on the track but this dumbass was like lawl wanna know what's fun? Running really really far";
const testAuthor = "Tom Kelly";

interface IBlogPreviewProps {
    title: string;
    body: string;
    author: string;
}

export const BlogPreview: React.FunctionComponent = () => {
    const setEllipsis = () => {
        console.log("hi");
        let elements = document.getElementsByClassName("blog-page__post-preview-body");
        for (let i = 0; i < elements.length; i++) {
            let el = elements[i] as any;
            let wordArray = el.innerHTML.split(' ');
            while(el.scrollHeight > el.offsetHeight) {
                wordArray.pop();
                el.innerHTML = wordArray.join(' ') + '...';
            }
        }
    }

    React.useEffect(() => {
        setEllipsis();
        window.addEventListener("resize", setEllipsis);
        return window.removeEventListener("resize", setEllipsis);
    }, []);

    return (
        <div className="blog-page__blog-post-preview-wrapper">
            <a className="blog-page__post-preview-image-wrapper">
                <img className="blog-page__post-preview-image" src="https://s26562.pcdn.co/wp-content/uploads/2019/12/20190428_Parkway_Classic_03742-Edited-630x420.jpg"/>
            </a>
            <div className="blog-page__post-text-preview">
                <div className="blog-page__post-preview-author">
                    {testAuthor}
                </div>
                <a href="" className="blog-page__post-preview-text-anchor">
                    <div className="blog-page__post-preview-header standard-bold-text">
                        {testHeader}
                    </div>
                    <div className="blog-page__post-preview-body">
                        {testBody}
                    </div>
                </a>
                <div className="blog-page__preview-footer">
                    <div className="blog-page__footer-divider" />
                    <div className="blog-page__view-count">
                        75 views
                    </div>
                </div>
            </div>
        </div>
    );
}