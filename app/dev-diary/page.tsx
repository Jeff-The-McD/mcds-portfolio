'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'

import {
    PROJECTS,
    EMAIL,
    SOCIAL_LINKS,
    PROJECTS_EXPANDED,
    BLOG_POSTS,
    EXPANDED_BLOG_POSTS
} from '../data'

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export default function DevDiary() {
    return (
        <motion.main
            className=""
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <div className="flex flex-col space-y-0">
                    <AnimatedBackground
                        enableHover
                        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                        transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.2,
                        }}
                    >
                        {EXPANDED_BLOG_POSTS.map((post) => (
                            <Link
                                key={post.uid}
                                className="-mx-3 rounded-xl px-3 py-3"
                                href={post.link}
                                data-id={post.uid}
                            >
                                <div className="flex flex-col space-y-1">
                                    <h4 className="font-normal dark:text-zinc-100">
                                        {post.title}
                                    </h4>
                                    <h5 className="font-normal dark:text-zinc-100">
                                        {post.date}
                                    </h5>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </AnimatedBackground>
                </div>
            </motion.section>

        </motion.main>
    )
}