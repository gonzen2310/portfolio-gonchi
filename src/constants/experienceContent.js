import uuid from 'uuid/v1';
export const EXPERIENCES = [
	{
		id: uuid(),
		number: '01',
		company: 'Codecademy',
		title: 'SWE Intern',
		location: 'New York, NY',
		date: 'June 2019 - August 2019',
		primaryColor: '#204055',
		secondaryColor: '#325f7d',
		bullets: [
			'Co-engineered the new Code Challenges feature, an assessment type that allows learners to type and execute code to reinforce their knowledge',
			'Demoed the Code Challenges MVP to the company stakeholders in the monthly all-hands meeting',
			'Took initiative and stepped forward to contribute to the migration of React components and Javascript files to Typescript',
			'Collaborated with designers and engineers to launch a new interactive 404 page that renders a custom endless runner game built with PhaserJS',
			'Worked on frontend improvements including redesigning the footer and catalog, converting legacy .erb pages to react and fixing accessibility bugs',
			'Reviewed and tested production-ready code. Utilized Jest and Enzyme for unit and component testing, TestCafe for E2E testing and RSpec for rails',
			'This summer I am interning at Codecademy and I am on the growth team',
		],
	},
	{
		id: uuid(),
		number: '02',
		company: 'Coding Hub',
		title: 'President and Cofounder',
		location: 'Plattsburgh, NY',
		date: 'September 2018 - Present',
		primaryColor: '#E66363',
		secondaryColor: '#F8959D',
		bullets: [
			'Spearhead an agile team of 20 members to plan, build, test and deploy 4 software apps to assist students and organizations on campus',
			'Establish coding standards and write detailed documentation to make applications maintainable and allow new members to quickly understand and collaborate on the projects',
			'Successfully explain highly-technical concepts to university staff to gain approval and receive support to deploy our applications',
			'Conduct bi-weekly stand-up meetings and encourage team collaboration through code reviews, pair programming, and weekly lightning talks',
			'Introduce and set up CI/CD pipeline with CircleCI in our workflow to improve development speed and ensure code quality',
			'Introduce and use Slack and Asana for team and project management',
		],
	},
	{
		id: uuid(),
		number: '03',
		company: 'Interbank',
		title: 'Data Analyst Intern',
		location: 'Lima, PE',
		date: 'June 2018 - August 2018',
		primaryColor: '#09A24F',
		secondaryColor: '#00C55B',
		bullets: [
			'Developed a supervised ML text classifier with python to process customer reviews with an accuracy of 92% as measured by a confusion matrix',
			'Built over 15 fully responsive in-apps and pop-ups for the bank app and website using HTML5, CSS3 and vanilla JS for A/B testing and experiments',
			'Proactively participated in committee meetings to show and analyze weekly results as well as propose and discuss new experiments',
		],
	},
	{
		id: uuid(),
		number: '04',
		company: 'Claude J. Clark Learning Center',
		title: 'Academic Tutor',
		location: 'Plattsburgh, NY',
		date: 'Spetember 2017 - November 2018',
		primaryColor: '#F7AA70',
		secondaryColor: '#F9C299',
		bullets: [
			'Assisted students with class material, reviews and assignments',
			'Tutored over 150 hours in 10 different courses including data structures, algorithms, python, C, C++ and calculus',
		],
	},
	{
		id: uuid(),
		number: '05',
		company: 'CS Department at SUNY Plattsburgh',
		title: 'Android Developer',
		location: 'Plattsburgh, NY',
		date: 'August 2017 - December 2017',
		primaryColor: '#006DB9',
		secondaryColor: '#1381C6',
		bullets: [
			'Worked together with Academic Advisor to assemble Burghy, an android application to help students find places on campus using indoor maps',
			'Submitted weekly detailed reports and documentation',
			'Presented application to the Computer Science Department',
		],
	},
];
