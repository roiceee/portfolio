import BlogCard from "@/components/card/blog-card";

export default function Page() {
  return (
    <main>
      <section className="prose my-12">
        <h1>Blog</h1>
      </section>
      <section className=" md:flex gap-12">
        <section>
          <BlogCard
            title="Sample Title"
            previewContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, praesentium unde fugiat nostrum atque sed quidem eos necessitatibus libero cumque dolore nesciunt, aspernatur repellat magni. Illo amet delectus suscipit magnam rem aliquam sint fugiat laudantium consectetur. Qui fugiat, magni maxime necessitatibus quam molestias consequatur. Nam amet provident esse, quaerat error unde, incidunt voluptatibus recusandae dignissimos magni ipsa perferendis ullam nesciunt quidem, autem soluta. Perferendis sit laborum vitae ipsum id consequuntur nihil atque autem ea nemo, blanditiis, quo fuga. Tenetur, sit eos, quasi veritatis quae repellendus nemo quo ab architecto rerum iure reprehenderit amet minima qui impedit? Deserunt voluptate, earum suscipit in rem quasi tempore exercitationem. Iusto a suscipit ducimus et laudantium labore atque ipsam deleniti est doloribus blanditiis quod adipisci maxime minus accusantium repellat tempora, quae earum aliquam ratione ut. Praesentium ea est, veritatis, distinctio vero quas possimus, aperiam voluptatum ex esse in corrupti. Tenetur explicabo facere qui deleniti! Animi tempora neque quas nulla qui quibusdam accusantium enim, consectetur accusamus!"
            date={new Date()}
            tags={["react", "nextjs", "tech"]}
            url="#"
          />
          <hr className="my-8" />
          <BlogCard
            title="Sample Title"
            previewContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, praesentium unde fugiat nostrum atque sed quidem eos necessitatibus libero cumque dolore nesciunt, aspernatur repellat magni. Illo amet delectus suscipit magnam rem aliquam sint fugiat laudantium consectetur. Qui fugiat, magni maxime necessitatibus quam molestias consequatur. Nam amet provident esse, quaerat error unde, incidunt voluptatibus recusandae dignissimos magni ipsa perferendis ullam nesciunt quidem, autem soluta. Perferendis sit laborum vitae ipsum id consequuntur nihil atque autem ea nemo, blanditiis, quo fuga. Tenetur, sit eos, quasi veritatis quae repellendus nemo quo ab architecto rerum iure reprehenderit amet minima qui impedit? Deserunt voluptate, earum suscipit in rem quasi tempore exercitationem. Iusto a suscipit ducimus et laudantium labore atque ipsam deleniti est doloribus blanditiis quod adipisci maxime minus accusantium repellat tempora, quae earum aliquam ratione ut. Praesentium ea est, veritatis, distinctio vero quas possimus, aperiam voluptatum ex esse in corrupti. Tenetur explicabo facere qui deleniti! Animi tempora neque quas nulla qui quibusdam accusantium enim, consectetur accusamus!"
            date={new Date()}
            tags={["react", "nextjs"]}
            url="#"
          />
          <hr className="my-8" />
          <BlogCard
            title="Sample Title"
            previewContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, praesentium unde fugiat nostrum atque sed quidem eos necessitatibus libero cumque dolore nesciunt, aspernatur repellat magni. Illo amet delectus suscipit magnam rem aliquam sint fugiat laudantium consectetur. Qui fugiat, magni maxime necessitatibus quam molestias consequatur. Nam amet provident esse, quaerat error unde, incidunt voluptatibus recusandae dignissimos magni ipsa perferendis ullam nesciunt quidem, autem soluta. Perferendis sit laborum vitae ipsum id consequuntur nihil atque autem ea nemo, blanditiis, quo fuga. Tenetur, sit eos, quasi veritatis quae repellendus nemo quo ab architecto rerum iure reprehenderit amet minima qui impedit? Deserunt voluptate, earum suscipit in rem quasi tempore exercitationem. Iusto a suscipit ducimus et laudantium labore atque ipsam deleniti est doloribus blanditiis quod adipisci maxime minus accusantium repellat tempora, quae earum aliquam ratione ut. Praesentium ea est, veritatis, distinctio vero quas possimus, aperiam voluptatum ex esse in corrupti. Tenetur explicabo facere qui deleniti! Animi tempora neque quas nulla qui quibusdam accusantium enim, consectetur accusamus!"
            date={new Date()}
            tags={["react", "nextjs"]}
            url="#"
          />
          <hr className="my-8" />
        </section>

        <aside className="prose mt-12 md:my-0 h-fit border-l pl-8">
          <h2>Archive</h2>
          <div className="grid grid-cols-2 gap-x-2 md:gap-x-10">
            <a href="#">January 2022</a>
            <a href="#">February 2022</a>
            <a href="#">March 2022</a>
            <a href="#">April 2022</a>
            <a href="#">May 2022</a>
            <a href="#">June 2022</a>
            <a href="#">July 2022</a>
            <a href="#">August 2022</a>
            <a href="#">September 2022</a>
            <a href="#">October 2022</a>
            <a href="#">November 2022</a>
            <a href="#">December 2022</a>
          </div>
        </aside>
      </section>
    </main>
  );
}
