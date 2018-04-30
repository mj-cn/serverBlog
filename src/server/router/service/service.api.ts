import { IPagePost, enumTypePost } from './service.page.interface';
import { IPostAPI, PostAPI } from 'posts-escuelita';

const mock: Array<IPagePost> = [];
const postAPI = PostAPI();

for (let i = 0; i < 23; i++) {
    postAPI.create({
        urlImage: "http://demo.shapedtheme.com/kotha-pro-html/assets/images/post-thumb-1.jpg",
        dateString: "Octubre 13, 2017",
        detalle: {
            categoria: `${i}`,
            descripcion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...",
            title: "ADVENTURE TO TRAVEL LONELY",
            linkPost: "/post/TestHash001",
            //typePost: enumTypePost.PREPOST
        }
    })
}

export async function getListPost(category: string): Promise<Array<any> | null> {
    return postAPI.getByCategory(category);
}

export async function getDataPost(idPost: string): Promise<IPost | null> {
    if (!idPost) {
        return Promise.resolve(null);
    }

    return postAPI.getById(idPost);
}
