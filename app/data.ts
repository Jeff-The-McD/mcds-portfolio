type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Project_verbose = {
  name: string
  description: string
  link: string
  video: string
  id: string

}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Personal Website revamp',
    description:
      'Revamping the personal website using the NIM template',
    link: 'https://github.com/Jeff-The-McD/mcds-portfolio',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/2025-06-07%2015-14-38.mp4',
    id: 'project1',
  },
  {
    name: 'Optical Flow Template',
    description:
      'An Optical Flow project meant to be used with UAV\'s to help with object avoidance.',
    link: 'https://github.com/Jeff-The-McD/mcds-portfolio',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/CAL%20POLY%20Pomona%20Optflow%20video%20showcase.mp4',
    id: 'project2',
  }
]

export const PROJECTS_EXPANDED: Project_verbose[] = [
  {
    name: 'Personal Website revamp',
    description:
      'Revamping the personal website using the NIM template',
    link: 'https://github.com/Jeff-The-McD/mcds-portfolio',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/2025-06-07%2015-14-38.mp4',
    id: 'project1'
  },
  {
    name: 'Optical Flow Template',
    description:
      'An Optical Flow project meant to be used with UAV\'s to help with object avoidance.',
    link: 'https://github.com/Jeff-The-McD/mcds-portfolio',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/CAL%20POLY%20Pomona%20Optflow%20video%20showcase.mp4',
    id: 'project2',
  },
  {
    name: 'WIP',
    description: 'Coming Soon',
    link: '/projects',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/vecteezy_coming-soon-text-animation-on-black-background_31744140.mov',
    id: 'project3',
  },
  {
    name: 'WIP2',
    description: 'Coming Soon',
    link: '/projects',
    video: 'https://pub-b59b329d480a4e97bdbc453fc0d8ba34.r2.dev/vecteezy_coming-soon-text-animation-on-black-background_31744140.mov',
    id: 'project4',
  }

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'American Express',
    title: 'Site Reliability Engineer',
    start: '2022',
    end: 'Present',
    link: 'https://www.americanexpress.com/',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "NIM to JM",
    description: 'Wasn\'t that bad getting back into the swing of things.',
    link: '/dev-diary/revamping-my-website',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Jeff-The-McD',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jeffrey-mcdonald-a8a886190/',
  }

]

export const EMAIL = 'reliableshifts@gmail.com'
