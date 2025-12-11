import React from 'react';
import CTAButton from './CTAButton';
import StatCard from './StatCard';
import FloatingIcon from './FloatingIcon';
import rhcsaBadge from '../assets/rhcsa-badge.png';
import gradientCubes from '../assets/gradient-cubes.png';
import cloud from '../assets/cloud.png';

const Hero = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8 animate-fade-up">
                        {/* Tag Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandBlue/10 border border-brandBlue/30 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-brandBlue rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-brandBlue">Red Hat Certified Training</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            <span className="gradient-text">
                                RHCSA Certification &<br />
                                Enterprise Cloud Solutions
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                            Master Red Hat Enterprise Linux administration and unlock enterprise cloud infrastructure
                            with industry-leading certification programs. Build your career with hands-on training
                            from certified experts.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <CTAButton variant="primary" className="text-base px-8 py-4">
                                Enroll for RHCSA Training
                            </CTAButton>
                            <CTAButton variant="secondary" className="text-base px-8 py-4">
                                View Courses
                            </CTAButton>
                        </div>
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 pt-8">

                            {/* 99.9% */}
                            <div>
                                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                                <div className="text-gray-400 text-sm">Uptime SLA</div>
                            </div>

                            {/* 500K+ */}
                            <div>
                                <div className="text-3xl font-bold text-red-500">500K+</div>
                                <div className="text-gray-400 text-sm">Threats Blocked</div>
                            </div>

                            {/* 24/7 */}
                            <div>
                                <div className="text-3xl font-bold text-green-400">24/7</div>
                                <div className="text-gray-400 text-sm">Monitoring</div>
                            </div>

                        </div>

                    </div>

                    {/* Right Column - 3D Illustration */}
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/20 via-brandPurple/20 to-brandPink/20 blur-3xl animate-pulse-glow"></div>

                        {/* Gradient Cubes Background Image */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
                            <img
                                src={gradientCubes}
                                alt="Gradient Cubes"
                                className="w-[500px] h-[500px] object-contain"
                            />
                        </div>

                        {/* Floating Icons Container - Above Background */}
                        <div className="relative z-10 w-full h-full">
                            {/* Cloud */}
                            <FloatingIcon className="absolute top-20 left-20" delay={0.5}>
                                <img src={cloud} alt="Cloud" className="w-32 h-32 animate-float-depth" />
                            </FloatingIcon>





                            <FloatingIcon className="absolute top-1/3 right-1" delay={0.3}>
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-lg security-card">

                                    {/* Green Icon Box */}
                                    <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center shadow-green-500/40 shadow-md">
                                        <div className="w-6 h-6 bg-white rounded-md"></div>
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex flex-col">
                                        <span className="text-gray-300 text-sm">Security Status</span>
                                        <span className="text-white font-semibold text-md">All Systems Protected</span>
                                    </div>

                                </div>
                            </FloatingIcon>



                            {/* Events / Response Card — Static */}
                            <div className="absolute bottom-24 right-32">
                                <div className="px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg flex items-center gap-6">

                                    {/* Left Metric */}
                                    <div className="flex flex-col">
                                        <span className="text-blue-400 text-xl font-bold">10M+</span>
                                        <span className="text-gray-300 text-sm">Events/Day</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-10 w-px bg-white/20"></div>

                                    {/* Right Metric */}
                                    <div className="flex flex-col">
                                        <span className="text-red-500 text-xl font-bold">50ms</span>
                                        <span className="text-gray-300 text-sm">Response</span>
                                    </div>

                                </div>
                            </div>


                            {/* RHCSA Badge */}
                            {/* <FloatingIcon className="absolute top-1/2 left-1/4" delay={0.9}>
                                <div className="w-24 h-24 bg-red-600/20 backdrop-blur-md rounded-full border-4 border-red-600/50 flex items-center justify-center neon-glow">
                                    <div className="text-center">
                                        <div className="text-xs font-bold text-red-400">RHCSA</div>
                                        <div className="text-xs text-red-300">Certified</div>
                                    </div>
                                </div>
                            </FloatingIcon> */}
                            <FloatingIcon className="absolute top-2/3 right+10" delay={1.2}>
                                <div className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-2xl border-1 border-red-600/50 flex items-center justify-center neon-glow p-2 hover:scale-110 transition-transform duration-300">
                                    <img src={rhcsaBadge} alt="RHCSA Badge" className="w-full h-full object-contain" />
                                </div>
                            </FloatingIcon>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
