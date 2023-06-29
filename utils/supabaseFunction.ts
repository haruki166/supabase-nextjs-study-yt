import { supabase } from "./supabase";


//todoテーブルから全てのデータ取得
export const getAllPosts = async () => {
    const todos = await supabase.from("todo").select("*");
    return todos;
}

//todoテーブルにレコードを追加
export const addPost = async (title:string) => {
    await supabase.from("todo").insert({title:title});
}

//削除する処理
export const deletePost = async (id:number) => {
    await supabase.from("todo").delete().eq("id",id);
}