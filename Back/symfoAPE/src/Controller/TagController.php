<?php

namespace App\Controller;

use App\Entity\Tag;
use App\Form\TagType;
use App\Repository\TagRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//use Symfony\Component\HttpFoundation\Request;

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
     * @Route("/tag/{id}", name="tag_show", methods={"GET"}))
     */
    public function show(Tag $tag)
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
     * @Route("/api/tag/new", methods={"POST"}, name="tag_new")
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
    
    /**
     * @Route("/api/tag/create", name="tag_create")
     * @Route("/api/tag/{id}/edit", name="tag_edit")
     */

    /**
     * @Route("/api/tag/{id}/delete", name="tag_delete")
     */
    


}
