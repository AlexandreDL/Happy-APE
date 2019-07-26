<?php

namespace App\Controller\Api;

use App\Entity\Tag;
use App\Form\TagType;
use App\Repository\TagRepository;
use Symfony\Component\HttpFoundation\Request;
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

    /**
     * Creates a new Tag entity.
     *
     * @Route("/tag/new", methods={"POST"}, name="tag_new")
     */
    public function newTag(Request $request) {
        $requestData = \json_decode($request->getContent(), true);  

        $tag = new Tag();
        $form = $this->createForm(TagType::class, $tag);
        $form->submit($requestData);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($tag);
            $em->flush();
            return new Response('I really hope it\s working fine.');
        } else {
            return $form;
        }
    }
}
