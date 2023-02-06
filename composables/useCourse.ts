/*
 * @Author:Jim Chen
 * @Date:2023-02-06 09:55:45
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 11:41:42
 * @Description:
 */
import courseData from './courseData';

type Course = {
  title: string;
  chapters: Chapter[];
}

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}

type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
  path: string;
}

export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map(
      (lesson) => ({
        ...lesson,
        path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
      })
    );
    return {
      ...chapter,
      lessons,
    }
  });
  return {
    ...courseData,
    chapters,
  };
};