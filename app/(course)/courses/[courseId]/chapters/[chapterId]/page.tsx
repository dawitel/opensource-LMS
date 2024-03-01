
import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import CourseVideo from "./_components/course-video";

const ChapterIdPage = async ({
    params,
}: {
    params: { courseId: string; chapterId: string }
}) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/");
    }

    const {
        chapter,
        course,
        muxData,
        attachments,            
        nextChapter,
        userProgress,
        purchase,
    } = await getChapter({
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId,
    });

    if(!chapter || !course) {
        return redirect("/");
    }
    const isLocked = !chapter.isFree && !purchase;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;

    
   
    
    const DSA1 = process.env.DSA1;
    const LA = process.env.LIA;
    const DM = process.env.DM;
    const DLD = process.env.DLD;
    const DSAmit = process.env.DSAmit;

    return ( 
        <div>
            {userProgress?.isCompleted && (
                <Banner 
                  variant="success"
                  label="You have already finished this chapter."
                />
            )}
            {isLocked && (
                <Banner 
                  variant="warning"
                  label="You need to purchase this course to watch this chapter."
                />
            )}
            <div className="flex flex-col max-w-5xl mx-auto pb-20">
                <div className="p-4">
                    <CourseVideo 
                        videoUrl={DSAmit!}
                        height={550}
                        width={990}                   
                    />
                    
                </div>
                <div>
                    <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                        <h2 className="text-2xl font-semibold mb-2">
                            {chapter.title}
                        </h2>
                        {purchase ? (
                            <div>{/* progress */}</div>
                        ): (
                            <CourseEnrollButton
                                courseId={params.courseId}
                                price={course.price!}
                            />
                        )}
                    </div>
                    <Separator />
                    {!!attachments.length && (
                        <>
                            <Separator />
                            <div className="p-4">
                                {attachments.map((attachment) => (
                                    <a 
                                        href={attachment.url}
                                        target="_blanck"
                                        key={attachment.id}
                                        className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                                    >
                                        <File />
                                        <p className="line-clamp-1">
                                            {attachment.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default ChapterIdPage;