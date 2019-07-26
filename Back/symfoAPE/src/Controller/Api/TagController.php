<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Component\HttpFoundation\Request;

/**
  * @Route("/api", name="api_")
  */
class TagController extends AbstractController
{
    /**
     * @Route("/tags", name="tag_list", methods = {"GET"})
     */
    public function list(TagRepository $tagRepository)
    {
       $tags = $tagRepository->findAll(); 
       return $this->json($tags);
    }

    // /**
    //  *  Deletes a Tag entity.
    // * @Route("/tag/{id}/delete", methods={"DELETE"}, name="admin_post_delete")
    //  */
    // public function delete()
    // {
    //    //todo
    // }

        /**
     * @Route("/tag/{id}", name="tag_one", methods={"GET"}))
     */
    public function one(Tag $tag)
    {
        return $this->json($tag);
    }
}
