import * as React from 'react';
import moment from 'moment';

const testTime = 1581224400000;
const testHeader = 'Dan Meteer exudes BDE after 2:17 marathon';
const testBody =
	"Sacramento, CA- Dan Meteer absolutely ripped a big one, and then he went on to run really fast in the marathon. HE almost decided to focus on the track but this dumbass was like lawl wanna know what's fun? Running really really far";
const testAuthor = 'Tom Kelly';
const secondTestBody = `This Saturday, the GRC track crew took to the Big Apple to once again put up an incredible showing in the Distance Medley Relay at the Millrose Games. The strength and depth of our mid distance crew was clearly evident with two full teams ready to roll for both the men and women.

Before the gun could even go off, our fearless teams were facing new challenges. Gina McNamara - the anchor for the Women's A team - tweaked her knee early in the week, and it was ruled a game time call whether or not she would ultimately race. While not exactly adversity, Zartosht Ahlers stepped up on the men's B team to run a 400 meter sprint to ensure a full crew could hit the starting line. Zartosht, along with Meghan Grimes are both former NIRCA Club runners from Princeton and the other Georgetown Running Club (the one affiliated with the university) respectively. For them to go from club teams in 2019 to the prestige of a meet like Millrose says much about their talent and ability to compete.

The GRC men were second in a club record 9:57.67, and the women were third in 11:44.3. The fields in both races were extremely competitive this year, and several teams in each race were faster on paper, but we rose to the challenge and proved once again that competing as a team brings out our best.

Elias got the men started with an excellent 3:00.93, which is the fastest 1200 in team history.  Elias bided his time and closed very hard in the last 200.  Scott ran a strong 51.74, followed by Jordan who ran a patient 1:55.19, and he also made a strong move on the last lap. Daniel T ran an excellent tactical race on the anchor, bringing it home in 4:09.83. After getting  the baton in third and sitting on the second place team for 1200, Daniel closed in 61 to secure second place, and to get us comfortably under the 10 minute barrier.  There is much more to come from this crew. 

Jackie got the women started with a very strong 3:37.44, which is the fastest lead off leg in GRC history.  Sarah C got the baton in seventh place, and her excellent 57.93, which is the fastest 400 leg in GRC history, moved us into fifth place.  Jesse ran a strong 2:15.15, which maintained our position.  Gina ran an outstanding 4:53.8 to bring us home in third place. Despite the uncertainty, Gina delivered a big time performance for her team, and her excellent run put us back on the podium.  After assessing the field, it was clear it would take an excellent collective performance for us to get into the top three, and the women delivered.

We also had strong performances from our B teams. The women finished ninth in 12:12.82. Liz T led off with a strong 3:43.97. Maggie continued her comeback tour with a 61.74.  Meghan ran an excellent 2:15.59, which was the fourth fastest split in the field.  Meghan's progress has been remarkable, and she will be a force to be reckoned with outdoors.  Stephanie B ran a strong 5:11.7 anchor, and barely missed catching the team ahead of her.  The men finished eleventh in 10:37.34. Tom got it started with an impressive 3:10.38. Tom got out hard, coming through 600 in 1:32.4, and he hung tough to the finish.  Zartosht ran 57.97, and while no one will confuse him with Fred Kerley, he gave it everything he had, and then some.  Jim B ran a strong 1:57.84, which is his best performance in a GRC singlet, and Adam anchored in a solid 4:31.17.  It was great to see so many of our young athletes have the opportunity to compete on the big stage at Millrose, and several members of this years B teams will make a strong case for inclusion on next years A teams.`;

interface IBlogPreviewProps {
	title: string;
	body: string;
	author: string;
}

export const BlogPreview: React.FunctionComponent = () => {
	const setEllipsis = () => {
		console.log('hi');
		let elements = document.getElementsByClassName(
			'blog-page__post-preview-body'
		);
		for (let i = 0; i < elements.length; i++) {
			let el = elements[i] as any;
			let wordArray = secondTestBody.split(' ');
			while (el.scrollHeight > el.offsetHeight) {
				wordArray.pop();
				el.innerHTML = wordArray.join(' ') + '...';
			}
		}
	};

	React.useEffect(() => {
		setEllipsis();
	}, []);

	return (
		<div className="blog-page__blog-post-preview-wrapper">
			<a className="blog-page__post-preview-image-wrapper">
				<img
					className="blog-page__post-preview-image"
					src="https://s26562.pcdn.co/wp-content/uploads/2019/12/20190428_Parkway_Classic_03742-Edited-630x420.jpg"
				/>
			</a>
			<div className="blog-page__post-text-preview">
				<div className="blog-page__post-preview-author">
					<div>{testAuthor}</div>
					<div className="blog-page__date-and-reading-length">
						<div>{moment(testTime).format('MMM DD')}</div> 
						<div className="blog-page__separating-dot"/> 
						<div>{Math.ceil(testBody.split(' ').length / 200)} min read</div>
					</div>
				</div>
				<a href={`/blog/post/${2}`} className="blog-page__post-preview-text-anchor">
					<div className="blog-page__post-preview-header standard-bold-text">
						{testHeader}
					</div>
					<div className="blog-page__post-preview-body">{secondTestBody}</div>
				</a>
				<div className="blog-page__preview-footer">
					<div className="blog-page__footer-divider" />
					<div className="blog-page__footer-text">75 views</div>
				</div>
			</div>
		</div>
	);
};
