/*id INTEGER NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL,
        bio TEXT NOT NULL,
		imageId INTEGER NOT NULL,
        gender TEXT NOT NULL,*/

interface IMemberInfo {
	id: number;
	firstName: string;
	lastName: string;
	image: string;
	gender: string;
}
