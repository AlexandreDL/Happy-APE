<?php

namespace App\Controller\Api;

use App\Entity\Child;
use App\Repository\ChildRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api", name="api_")
 */
class ChildController extends AbstractController
{
    /**
     * @Route("/children", name="childrend_list")
     */
    public function list(ChildRepository $childRepository)
    {
        $children = $childRepository->findChildren();
        return $this->json($children);
    }

    /**
     * @Route("/child/{id}/delete", name="child_delete", methods="DELETE")
     */
    public function delete(Request $request, Child $child)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($child);
        $em->flush();
        return $this->json('', Response::HTTP_NO_CONTENT);
    }

}
