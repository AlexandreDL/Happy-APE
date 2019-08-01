<?php

namespace App\Controller\Api;

use App\Entity\News;
use App\Repository\NewsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api", name="api_")
 */
class NewsController extends AbstractController
{
    /**
     * @Route("/news", name="news_list", methods = {"GET"})
     */
    public function list(NewsRepository $newsRepository)
    {
       $news = $newsRepository->findNext3(); 
       return $this->json($news);
    }

    /**
     * @Route("/news/{id}", name="news_one", methods={"GET"}))
     */
    public function one(News $news)
    {   
        if (empty($news)) {
            return new JsonResponse(['message' => 'News not found'], Response::HTTP_NOT_FOUND);
          }
    
        return $this->json($news);
    }

    /**
     * @Route("/news/{id}/delete", name="news_delete", methods="DELETE")
     */
    public function delete(Request $request, News $news)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($news);
        $em->flush();
        return $this->json('', Response::HTTP_NO_CONTENT);
    }
}
