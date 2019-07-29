<?php

namespace App\Controller\Api;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//use Symfony\Component\HttpFoundation\Request;

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
 
        $formatted = [];
        foreach ($tags as $tag) {
            $formatted[] = [
               'id' => $tag->getId(),
               'name' => $tag->getTitle(),
            ];
        } 
        return new JsonResponse($formatted);
    }
    

    /**
     * @Route("/tag/{id}", name="tag_one", methods={"GET"}))
     */
    public function one(Tag $tag)
    { 
      if (empty($tag)) {
        return new JsonResponse(['message' => 'Tag not found'], Response::HTTP_NOT_FOUND);
      }


        $formatted[] = [
        'id' => $tag->getId(),
        'name' => $tag->getTitle(),
        ];
        return new JsonResponse($formatted);
    }
}
