import { MiniPostCard } from "@/components/post_list/MiniPostCard";
import PostCard from "@/components/post_list/PostCard";
import { Post } from "@/config/types";

export const Curation = ({postList}: {postList: Post[]}) => {
  const firstPost = postList[0];
  const hotPostAllList = postList.filter((post) => post.isHot);
  const hotPostShowList = firstPost.isHot? hotPostAllList.slice(1,  5) : hotPostAllList.slice(0,  4);

  return (
    <div className='mx-auto w-full max-w-[1200px] px-4 flex gap-6 lg:gap-8 mt-6 sm:mt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full'>
        
        <section className='lg:col-span-1 flex flex-col'>
          <h2 className='text-lg sm:text-2xl font-bold mb-3'>추천하는 글</h2>
          <div className='flex flex-col gap-3 flex-1'>
            {hotPostShowList.map((post) => (
              <MiniPostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
        
        {/* 우측: 새 포스트 */}
        <section className="lg:col-span-2 row-span-1 flex flex-col">
          <h2 className='text-lg sm:text-2xl font-bold mb-3'>새로 올라온 글</h2>
          <div className='flex gap-4'>
            {postList.slice(0, 2).map((post) => (
              <div key={post.slug} className="w-1/2">
                <PostCard post={post} />

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}