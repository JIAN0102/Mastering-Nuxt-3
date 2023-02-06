/*
 * @Author:Jim Chen
 * @Date:2023-02-06 16:21:45
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 16:21:46
 * @Description:
 */
export const useFirstLesson = () => {
  const { chapters } = useCourse();

  return chapters[0].lessons[0];
}